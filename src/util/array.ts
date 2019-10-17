export const removeMember = (
  array: string[],
  memberToDelete: string,
): string[] => {
  return array.filter((member) => member !== memberToDelete);
};
