 type posterProps = {
    title?: string | null;
    address?: string | null;
    phoneNumber?: number | null;
    day?: string | null;
    image?: string | null;
    data?:{
        title?: string | null;
        address?: string | null;
        phoneNumber?: number | null;
        day?: string | null;
        image?: string | null;
    }
  };
  
type orderProps = {
  id: number,
  status: string,
  description: string,
  count: number,
}
// Define GoodsItem type
type GoodsItem = {
  item: string;
  quantity: number;
  _id: string;
};

// Define Order type based on API response
type Order = {
  _id: string;
  userId: string;
  goodsItems: GoodsItem[];
  status: string;
  createdAt: string;
  statusHistory: {
    status: string;
    changedAt: string;
    _id: string;
  }[];
  __v: number;
};
