import BaseLayout from '@/containers/Layout/BaseLayout';
import RootComponent from './root';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <RootComponent>
          <BaseLayout>{children}</BaseLayout>
        </RootComponent>
      </body>
    </html>
  );
}
