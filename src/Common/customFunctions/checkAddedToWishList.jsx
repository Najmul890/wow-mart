export function checkAddedToWishList(wishList,item) {
    const product = wishList?.find((pd) => pd?.id == item?.id);
    if (product) {
      return true;
    } else {
      return false;
    }
  }