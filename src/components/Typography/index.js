import styled from "styled-components";

export const TBasic = styled.p`
  font-family: ${props => props.font || props.theme.fontFamily.main};
  ${props =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
  color: ${props => (props.color ? props.color : props.theme.colors.navy)};
  font-weight: ${props =>
    props.weight ? props.weight : props.theme.weight.regular};
  ${props => props.lineHeight && `line-height: ${props.lineHeight}`};
  text-align: ${props => (props.align ? props.align : "left")};
  ${props => props.opacity && `opacity: ${props.opacity}`};
  ${props =>
    props.transform && `text-transform: ${props.transform} !important`};

  margin: ${props => props.m || "0"};
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
  ${props => props.display && `display: ${props.display}`};

  ${props => props.cursor && props.cursor && `cursor: ${props.cursor}`};
`;

export const Headline = styled(TBasic)`
  font-weight: ${props =>
    props.weight ? props.weight : props.theme.weight.bold};
  font-size: ${props => props.fontSize || "26px"};
  line-height: ${props => props.lineHeight || "39px"};
`;

export const Title = styled(TBasic)`
  font-weight: ${props =>
    props.weight ? props.weight : props.theme.weight.bold};
  font-size: ${props => props.fontSize || "20px"};
  line-height: ${props => props.lineHeight || "30px"};
`;

export const Body = styled(TBasic)`
  font-weight: ${props =>
    props.weight ? props.weight : props.theme.weight.regular};
  font-size: ${props => props.fontSize || "18px"};
  line-height: ${props => props.lineHeight || "27px"};
`;

export const Caption = styled(TBasic)`
  font-weight: ${props =>
    props.weight ? props.weight : props.theme.weight.regular};
  font-size: ${props => props.fontSize || "16px"};
  line-height: ${props => props.lineHeight || "22px"};
`;

const TLabel = TBasic.withComponent("label");

export const Label = styled(TLabel)`
  font-weight: ${props =>
    props.weight ? props.weight : props.theme.weight.regular};
  font-size: ${props => props.fontSize || "14px"};
  line-height: ${props => props.lineHeight || "16px"};
`;

export const ErrorLabel = styled(Label)`
  color: ${props => (props.color ? props.color : props.theme.colors.red)};
`;

export const WarningLabel = styled(Label)`
  color: ${props => (props.color ? props.color : props.theme.colors.orange)};
`;

export const ErrorText = styled(TBasic)`
  font-weight: ${props =>
    props.weight ? props.weight : props.theme.weight.regular};
  font-size: ${props => props.fontSize || "12px"};
  line-height: ${props => props.lineHeight || "14px"};
  color: ${props => (props.color ? props.color : props.theme.colors.red)};
`;

export const WarningText = styled(ErrorText)`
  color: ${props => (props.color ? props.color : props.theme.colors.orange)};
`;
