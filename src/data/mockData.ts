import { ManufacturingOrder, WorkOrder, BOM, StockMovement, KPI } from '@/types';

export const mockManufacturingOrders: ManufacturingOrder[] = [
  {
    id: 'MO001',
    orderNumber: 'MO-2024-001',
    productName: 'Steel Bracket Assembly',
    quantity: 500,
    status: 'in-progress',
    priority: 'high',
    startDate: '2024-01-15',
    dueDate: '2024-02-15',
    completedQuantity: 325,
    assignedTo: 'Oscar Operator',
    progress: 65
  },
  {
    id: 'MO002',
    orderNumber: 'MO-2024-002',
    productName: 'Aluminum Housing',
    quantity: 200,
    status: 'planned',
    priority: 'medium',
    startDate: '2024-02-01',
    dueDate: '2024-03-01',
    completedQuantity: 0,
    progress: 0
  },
  {
    id: 'MO003',
    orderNumber: 'MO-2024-003',
    productName: 'Circuit Board PCB',
    quantity: 1000,
    status: 'completed',
    priority: 'low',
    startDate: '2024-01-01',
    dueDate: '2024-01-31',
    completedQuantity: 1000,
    assignedTo: 'Oscar Operator',
    progress: 100
  },
  {
    id: 'MO004',
    orderNumber: 'MO-2024-004',
    productName: 'Motor Assembly',
    quantity: 150,
    status: 'delayed',
    priority: 'urgent',
    startDate: '2024-01-10',
    dueDate: '2024-01-25',
    completedQuantity: 75,
    assignedTo: 'Oscar Operator',
    progress: 50
  }
];

export const mockWorkOrders: WorkOrder[] = [
  {
    id: 'WO001',
    orderNumber: 'WO-2024-001',
    operation: 'CNC Machining',
    assignedTo: 'Oscar Operator',
    status: 'in-progress',
    estimatedHours: 8,
    actualHours: 5.5,
    startTime: '2024-01-15T08:00:00',
    manufacturingOrderId: 'MO001'
  },
  {
    id: 'WO002',
    orderNumber: 'WO-2024-002',
    operation: 'Welding',
    assignedTo: 'Oscar Operator',
    status: 'planned',
    estimatedHours: 6,
    manufacturingOrderId: 'MO001'
  },
  {
    id: 'WO003',
    orderNumber: 'WO-2024-003',
    operation: 'Quality Inspection',
    assignedTo: 'Morgan Manager',
    status: 'completed',
    estimatedHours: 2,
    actualHours: 1.5,
    startTime: '2024-01-01T09:00:00',
    endTime: '2024-01-01T10:30:00',
    manufacturingOrderId: 'MO003'
  }
];

export const mockBOMs: BOM[] = [
  {
    id: 'BOM001',
    productId: 'PROD001',
    productName: 'Steel Bracket Assembly',
    version: 'v1.2',
    totalCost: 45.67,
    items: [
      {
        id: 'BOM001-1',
        partNumber: 'STL-001',
        description: 'Steel Plate 10x15cm',
        quantity: 2,
        unit: 'pcs',
        cost: 12.50,
        supplier: 'Steel Corp'
      },
      {
        id: 'BOM001-2',
        partNumber: 'BOL-M8',
        description: 'M8 Hex Bolts',
        quantity: 4,
        unit: 'pcs',
        cost: 0.75,
        supplier: 'Fastener Ltd'
      },
      {
        id: 'BOM001-3',
        partNumber: 'WSH-M8',
        description: 'M8 Washers',
        quantity: 4,
        unit: 'pcs',
        cost: 0.25,
        supplier: 'Fastener Ltd'
      }
    ]
  }
];

export const mockStockMovements: StockMovement[] = [
  {
    id: 'SM001',
    partNumber: 'STL-001',
    description: 'Steel Plate 10x15cm',
    movementType: 'out',
    quantity: -10,
    unit: 'pcs',
    reference: 'MO-2024-001',
    date: '2024-01-15',
    currentStock: 45
  },
  {
    id: 'SM002',
    partNumber: 'BOL-M8',
    description: 'M8 Hex Bolts',
    movementType: 'in',
    quantity: 100,
    unit: 'pcs',
    reference: 'PO-2024-015',
    date: '2024-01-14',
    currentStock: 250
  },
  {
    id: 'SM003',
    partNumber: 'ALU-002',
    description: 'Aluminum Sheet',
    movementType: 'adjustment',
    quantity: -5,
    unit: 'pcs',
    reference: 'INV-ADJ-001',
    date: '2024-01-13',
    currentStock: 15
  }
];

export const mockKPIs: KPI[] = [
  {
    title: 'Total Orders',
    value: 4,
    change: 2,
    trend: 'up',
    format: 'number'
  },
  {
    title: 'Completed Orders',
    value: 1,
    change: 1,
    trend: 'up',
    format: 'number'
  },
  {
    title: 'On-Time Delivery',
    value: 85,
    change: 5,
    trend: 'up',
    format: 'percentage'
  },
  {
    title: 'Total Production Value',
    value: '$125,450',
    change: 12,
    trend: 'up',
    format: 'currency'
  }
];