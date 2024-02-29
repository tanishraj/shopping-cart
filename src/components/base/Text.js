export const Text = ({ type = "p", children, ...restProps }) => {
  const Element = type;

  return <Element {...restProps}>{children}</Element>;
};
