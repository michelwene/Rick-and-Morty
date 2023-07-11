import * as S from "./styles";

interface PaginationProps {
  handleSwitchPage: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

export function Pagination({
  currentPage = 1,
  totalPages = 1,
  handleSwitchPage,
}: PaginationProps) {
  let pages = [];

  const numberOfPages =
    currentPage + 2 > totalPages ? totalPages : currentPage + 2;

  for (let i = currentPage; i <= numberOfPages; i++) {
    if (i === currentPage && currentPage > 2) {
      pages.push(currentPage - 2);
      pages.push(currentPage - 1);
    }
    if (i === currentPage && currentPage === 2) {
      pages.push(currentPage - 1);
    }
    pages.push(i);
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.ListItem>
          <S.WrapperButtonsIcon>
            <S.Button
              onClick={() => handleSwitchPage(1)}
              disabled={currentPage === 1}
            >
              <S.FirstPageIcon />
            </S.Button>
            <S.Button
              onClick={() => handleSwitchPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <S.LeftIcon />
            </S.Button>
          </S.WrapperButtonsIcon>
        </S.ListItem>
        {pages.map((page) => (
          <S.ListItem key={page}>
            <S.ButtonPage
              onClick={() => handleSwitchPage(page)}
              isSelected={page === currentPage}
            >
              {page}
            </S.ButtonPage>
          </S.ListItem>
        ))}
        <S.ListItem>
          <S.WrapperButtonsIcon>
            <S.Button
              onClick={() => handleSwitchPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <S.RightIcon />
            </S.Button>
            <S.Button
              onClick={() => handleSwitchPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <S.LastPageIcon />
            </S.Button>
          </S.WrapperButtonsIcon>
        </S.ListItem>
      </S.Wrapper>
    </S.Container>
  );
}
