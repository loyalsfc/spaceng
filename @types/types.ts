export interface PropertyType {
  image: string;
  title: string;
  location: string;
  labels: string[];
  rating: number;
  reviewNum: number;
  price: number;
}

export interface DashboardIconsProps {
  fill: "#205BF3" | "#9D9D9D";
}

export interface PropertyPayload {
  property_title: string;
  property_description: string;
  property_address: string;
  price: number;
  old_price?: number;
  price_prefix?: string;
  price_postfix?: string;
  type: "workspace" | "shortlet";
  location?: string;
  neighborhood?: string;
  bedroom?: number;
  gallery: string[];
  video: string[];
  features: string[];
}

export interface PropertyResponse {
  bedroom: number;
  createdAt: string;
  features: string[];
  gallery: string[];
  price: number;
  old_price: number;
  price_postfix: string;
  price_prefix: string;
  property_address: {
    address: string;
    location: string;
    neighborhood: string;
  };
  property_description: string;
  property_title: string;
  reviews: string[];
  type: "shortlet" | "workspace";
  updatedAt: string;
  user: string;
  video: string[];
  __v: number;
  _id: string;
  labels: string;
  status: "Active" | "Pending Approval" | "Inactive";
  wishlists: {
    _id: string;
    user_id: string;
    property_id: string;
  }[];
}

export interface WishlistResponse {
  _id: string;
  __v: number;
  user_id: string;
  property_id: PropertyResponse;
  type: string;
}
