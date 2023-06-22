import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 44px;
  padding: 0 9px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const HeaderTitle = styled.span`
  font-size: ${({ theme }) => theme.fonts.body.bold.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.bold.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.bold.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;

  width: 105px;
  height: 42px;

  font-size: ${({ theme }) => theme.fonts.body.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.regular.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const EmptyTag = styled.div`
  width: 105px;
`;

export { Header, HeaderTitle, CloseButton, EmptyTag };
