import { useState } from 'react';

// Defining clear data structures for our layout items
export interface TransactionItem {
  id: string;
  category: string;
  description: string;
  amount: number;
  time: string;
}

export function useController() {
  // State tracking whether sensitive total account balances are hidden or visible
  const [isBalanceVisible, setIsBalanceVisible] = useState<boolean>(false);

  // Active user data layer structure modeled directly off your design file reference
  const currentMonth: string = "May, 2026";
  const totalExpenditure: number = 90;

  // Mock ledger array matching your exact UI items layout
  const dailyTransactions: TransactionItem[] = [
    {
      id: 'tx-001',
      category: 'Food',
      description: 'zinger burger',
      amount: -90,
      time: '22:51',
    },
  ];

  // Helper method to toggle the visibility state
  const toggleBalanceVisibility = (): void => {
    setIsBalanceVisible((prev) => !prev);
  };

  // Exposing dynamic properties safely to the layout view
  return {
    isBalanceVisible,
    toggleBalanceVisibility,
    currentMonth,
    totalExpenditure,
    dailyTransactions,
  };
}