export const getColor = (total) => {
  switch (true) {
    case total === -1:
      return '#FFFFFF';
    case total <= 10:
      return '#FFEDA0';
    case total <= 100:
      return '#FED976';
    case total <= 1000:
      return '#FEB24C';
    case total <= 10000:
      return '#FD8D3C';
    case total <= 100000:
      return '#FC4E2A';
    case total <= 1000000:
      return '#E31A1C';
    case total <= 10000000:
      return '#BD0026';
    default:
      return '#800026';
  }
};
