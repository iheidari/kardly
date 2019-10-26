export const removeMember = (array, memberToDelete) => {
  return array.filter((member) => member !== memberToDelete);
};
