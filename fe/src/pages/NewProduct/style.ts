import styled from 'styled-components';

const Layout = styled.div`
  max-width: 393px;
  height: 853px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 44px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.blur};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};

  font-size: ${({ theme }) => theme.fonts.body.bold.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.bold.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.bold.lineHeight};
`;

const CloseButton = styled.button`
  font-size: ${({ theme }) => theme.fonts.body.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.regular.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const CompleteButton = styled.button`
  font-size: ${({ theme }) => theme.fonts.body.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.regular.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;
// todo: 완료 버튼 입력이 다 됐을 경우에만 스타일 처리

const TabBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 83px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.weak};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

// todo: 동네 설정, 키보드 아이콘 색상 설정
const RegionSettingButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  font-size: ${({ theme }) => theme.fonts.footnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
`;

const LayoutContent = styled.div`
  padding: 0px 16px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 22px;
  padding: 30px 0px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 25px 0px;
`;

const Keyboard = styled.div``;

export {
  Layout,
  Header,
  CloseButton,
  CompleteButton,
  TabBar,
  RegionSettingButton,
  LayoutContent,
  TextInput,
  TextArea,
  Keyboard,
};
