export interface ItemRequest {
  id: number;
  itemName: string;
  description: string;
  maxPrice: number;
  category: string;
  status: 'pending' | 'active' | 'completed';
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string;
  rating?: number;
}

export interface Offer {
  id: number;
  itemRequestId: number;
  supplierId: number;
  price: number;
  description: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface NotificationProps {
  message: string;
  type: NotificationType;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}
