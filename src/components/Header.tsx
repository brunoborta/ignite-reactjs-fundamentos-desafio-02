interface HeaderProps {
  selectedGenre: {
    title: string;
  };
}

export function Header(props: HeaderProps) {
  const { selectedGenre } = props;

  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
