type headerOptions = {
  isShow?: boolean;
};

interface BaseLayoutProps {
  children?: React.ReactNode;
  headerOptions?: headerOptions;
}

interface HeaderProps {
  options?: headerOptions;
}
