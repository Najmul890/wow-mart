export function checkAddedToCart(cart,item) {
    const product = cart?.find((pd) => pd?.id == item?.id);
    if (product) {
      return true;
    } else {
      return false;
    }
  }