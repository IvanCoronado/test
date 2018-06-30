import Sockette from 'sockette'
import { updateGame } from "../game/actions";

const removeNull = (obj) =>
    Object.keys(obj)
        .filter(gameId => obj[gameId] !== null && obj[gameId] !== undefined)
        .reduce((arrayObjects, index) =>
            [...arrayObjects, {
                ...obj[index],
                socketId: index
            }], []);

export const wsMiddleware = () => store => {
  const ws = new Sockette('ws://livestats.proxy.lolesports.com/stats?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjoiMS4wIiwiamlkIjoiYjZjNTRmYjgtMGVlYS00MDA5LTg1NGYtOTU3NzU1ZDc4NDIyIiwiaWF0IjoxNTMwMjkwNTAwMDQwLCJleHAiOjE1MzA4OTUzMDAwNDAsIm5iZiI6MTUzMDI5MDUwMDA0MCwiY2lkIjoiYTkyNjQwZjI2ZGMzZTM1NGI0MDIwMjZhMjA3NWNiZjMiLCJzdWIiOnsiaXAiOiIxNzguMTU2LjguMTE3IiwidWEiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xM181KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNjcuMC4zMzk2Ljk5IFNhZmFyaS81MzcuMzYifSwicmVmIjpbIndhdGNoLioubG9sZXNwb3J0cy5jb20iXSwic3J2IjpbImxpdmVzdGF0cy12MS4wIl19.S7K4NX0OzhXsWPIc2H2BaPuZIhzOa5yIYJBocKKE02M', {
      timeout: 5e3,
      maxAttempts: 10,
      onopen: e => console.log('Connected!', e),
      onmessage: e => {
          const matches = removeNull(JSON.parse(e.data));
          console.log(matches);
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
