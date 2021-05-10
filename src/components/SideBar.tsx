import { Button } from "./Button";
import { GenreResponseProps as Genre } from "../App";

interface SideBarProps {
  genres: Genre[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar(props: SideBarProps) {
  const { genres, handleClickButton, selectedGenreId } = props;

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
