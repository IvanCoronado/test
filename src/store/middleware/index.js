import Sockette from 'sockette'
import { updateGame } from "../game/actions";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjoiMS4wIiwiamlkIjoiMWE0YjNlOWUtZGE2ZS00NTExLTg3NDEtYWZkOTI3MjllMDY3IiwiaWF0IjoxNTMwMzYxNDU5NDA2LCJleHAiOjE1MzA5NjYyNTk0MDYsIm5iZiI6MTUzMDM2MTQ1OTQwNiwiY2lkIjoiYTkyNjQwZjI2ZGMzZTM1NGI0MDIwMjZhMjA3NWNiZjMiLCJzdWIiOnsiaXAiOiIxNzguMTU2LjguMTE3IiwidWEiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xM181KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNjcuMC4zMzk2Ljk5IFNhZmFyaS81MzcuMzYifSwicmVmIjpbIndhdGNoLioubG9sZXNwb3J0cy5jb20iXSwic3J2IjpbImxpdmVzdGF0cy12MS4wIl19.kCURL9xovvt1nfSSos9knOjxruG-W0lkFXxXB0TRRpw';
const removeNull = (obj) =>
    Object.keys(obj)
        .filter(gameId => obj[gameId] !== null && obj[gameId] !== undefined)
        .reduce((arrayObjects, index) =>
            [...arrayObjects, {
                ...obj[index],
                socketId: index
            }], []);

export const wsMiddleware = () => store => {
  const ws = new Sockette(`ws://livestats.proxy.lolesports.com/stats?jwt=${token}`, {
      timeout: 5e3,
      maxAttempts: 10,
      onopen: e => console.log('Connected!', e),
      onmessage: e => {
          const matches = removeNull(JSON.parse(e.data));
          console.log(JSON.parse(e.data));
          if (!!matches) {
              store.dispatch(updateGame({matches}))
          }
      },
      onreconnect: e => console.log('Reconnecting...', e),
      onmaximum: e => console.log('Stop Attempting!', e),
      onclose: e => console.log('Closed!', e),
      onerror: e => console.log('Error:', e)
  });

  return next => action => {
    return next(action);
  };
};
