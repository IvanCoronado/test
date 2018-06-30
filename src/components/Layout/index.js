import styled from "styled-components";

export const Box = styled.div`
  ${props =>
    (props.width || props.size) && `width: ${props.width || props.size}`};
  ${props =>
    (props.height || props.size) && `height: ${props.height || props.size}`};
  ${props => props.radius && `border-radius: ${props.radius}`};
  ${props => props.minWidth && `min-width: ${props.minWidth}`};
  ${props => props.minHeight && `min-height: ${props.minHeight}`};
  ${props => props.maxWidth && `max-width: ${props.maxWidth}`};
  ${props => props.maxHeight && `max-height: ${props.maxHeight}`};
  background-color: ${props => props.color || "transparent"};

  ${props => props.position && `position: ${props.position}`};

  ${props => props.m && `margin: ${props.m}`};
  ${props =>
    props.mx &&
    `
    margin-left: ${props.mx};
    margin-right: ${props.mx};
    `};
  ${props =>
    props.my &&
    `
    margin-top: ${props.my};
    margin-bottom: ${props.my};
    `};
  ${props => props.ml && `margin-left: ${props.ml}`};
  ${props => props.mr && `margin-right: ${props.mr}`};
  ${props => props.mt && `margin-top: ${props.mt}`};
  ${props => props.mb && `margin-bottom: ${props.mb}`};

  ${props => props.p && `padding: ${props.p}`};
  ${props =>
    props.px &&
    `
    padding-left: ${props.px};
    padding-right: ${props.px};
    `};
  ${props =>
    props.py &&
    `
    padding-top: ${props.py};
    padding-bottom: ${props.py};
    `};
  ${props => props.pl && `padding-left: ${props.pl}`};
  ${props => props.pr && `padding-right: ${props.pr}`};
  ${props => props.pt && `padding-top: ${props.pt}`};
  ${props => props.pb && `padding-bottom: ${props.pb}`};

  border: 0;
  ${props =>
    (props.b || props.bl || props.br || props.bt || props.bb) &&
    `border-color: ${props.borderColor || props.theme.colors.greyDark}`};
  ${props =>
    (props.b || props.bl || props.br || props.bt || props.bb) &&
    `border-style: ${props.borderStyle || "solid"}`};
  ${props => props.b && `border-width: ${props.b}`};
  ${props => props.bl && `border-left-width: ${props.bl}`};
  ${props => props.br && `border-right-width: ${props.br}`};
  ${props => props.bt && `border-top-width: ${props.bt}`};
  ${props => props.bb && `border-bottom-width: ${props.bb}`};

  ${props => props.opacity && `opacity: ${props.opacity}`};
  ${props => props.area && `grid-area: ${props.area}`};

  ${props => props.background && `background: ${props.background}`};
  ${props => props.url && `background-image: url(${props.url})`};
  ${props => props.url && `background-repeat: ${props.repeat || "no-repeat"}`};
  ${props =>
    props.url &&
    props.backgroundSize &&
    `background-size: ${props.backgroundSize}`};

  ${props => props.cursor && `cursor: ${props.cursor}`};
  ${props => props.shadow && `box-shadow: ${props.shadow}`};
`;

export const Grid = styled(Box)`
  display: grid;
  ${props => props.columns && `grid-template-columns: ${props.columns}`};
  ${props => props.columnsGap && `grid-column-gap: ${props.columnsGap}`};
  ${props => props.rows && `grid-template-rows: ${props.rows}`};
  ${props => props.rowsGap && `grid-row-gap: ${props.rowsGap}`};
  ${props => props.areas && `grid-template-areas: ${props.areas}`};
  ${props => props.autoRows && `grid-auto-rows: ${props.autoRows}`};
  ${props => props.autoFlow && `grid-auto-flow: ${props.autoFlow}`};
  ${props => props.justify && `justify-content: ${props.justify}`};
  ${props => props.align && `align-items: ${props.align}`};
  ${props => props.flex && `flex: ${props.flex}`};
`;

export const GridInline = styled(Box)`
  display: inline-grid;
  ${props => props.columns && `grid-template-columns: ${props.columns}`};
  ${props => props.columnsGap && `grid-column-gap: ${props.columnsGap}`};
  ${props => props.rows && `grid-template-rows: ${props.rows}`};
  ${props => props.rowGap && `grid-row-gap: ${props.rowGap}`};
  ${props => props.areas && `grid-template-areas: ${props.areas}`};
`;

export const Absolute = styled(Box)`
  position: absolute;
  ${props => props.left && `left: ${props.left}`};
  ${props => props.right && `right: ${props.right}`};
  ${props => props.top && `top: ${props.top}`};
  ${props => props.bottom && `bottom: ${props.bottom}`};
`;

export const Row = styled(Box)`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  align-items: ${props => props.align || "center"};
  justify-content: ${props => props.justify || "flex-start"};
  ${props => props.flex && `flex: ${props.flex}`};
`;

export const RowCentered = styled(Box)`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  align-items: ${props => props.align || "center"};
  justify-content: ${props => props.justify || "center"};
  ${props => props.flex && `flex: ${props.flex}`};
`;

export const Column = styled(Box)`
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  align-items: ${props => props.align || "stretch"};
  justify-content: ${props => props.justify || "flex-start"};
  ${props => props.flex && `flex: ${props.flex}`};
`;

export const ColumnCentered = styled(Box)`
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  align-items: ${props => props.align || "center"};
  justify-content: ${props => props.justify || "center"};
  ${props => props.flex && `flex: ${props.flex}`};
`;

export const AbsoluteColumnCentered = styled(ColumnCentered)`
  position: absolute;
  ${props => props.left && `left: ${props.left}`};
  ${props => props.right && `right: ${props.right}`};
  ${props => props.top && `top: ${props.top}`};
  ${props => props.bottom && `bottom: ${props.bottom}`};
`;

export const BoxImage = Box.withComponent("img");
export const Image = styled(BoxImage)`
  object-fit: ${props => props.fit || "cover"};
`;
