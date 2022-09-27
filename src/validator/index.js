export const required = () => {
  return (v) => !!v || "Không được để trống";
};

export const positive = () => {
  return (v) => v > 0 || "Giá trị không được <= 0";
};
