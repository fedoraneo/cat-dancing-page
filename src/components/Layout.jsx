import '../styles/layout.css';

export default function Layout({ children }) {
  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">
          <span className="title-emoji">🐾</span>
          고양이 댄스 파티
          <span className="title-emoji">🐾</span>
        </h1>
        <p className="page-subtitle">귀여운 고양이의 신나는 댄스를 감상하세요!</p>
      </header>
      <main className="page-main">{children}</main>
      <footer className="page-footer">
        <p>Made with ❤️ and lots of cat energy</p>
      </footer>
    </div>
  );
}
