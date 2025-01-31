import { CategoryContent, CategoryTitle } from './styles';

type Props = {
  title: string;
  icon: JSX.Element;
};

const Category = ({ title, icon }: Props) => {
  return (
    <CategoryContent>
      {icon}
      <CategoryTitle>{title}</CategoryTitle>
    </CategoryContent>
  );
};

export default Category;
