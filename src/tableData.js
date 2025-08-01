// Table data for React Spectrum TableView component showcase

export const sampleTableData = [
  {
    id: '1',
    name: 'Adobe Photoshop',
    type: 'Application',
    category: 'Design',
    version: '2024.1',
    size: '2.1 GB',
    date: '2024-01-15',
    status: 'Active'
  },
  {
    id: '2',
    name: 'React Spectrum',
    type: 'Library',
    category: 'Development',
    version: '3.34.1',
    size: '45 MB',
    date: '2024-01-20',
    status: 'Active'
  },
  {
    id: '3',
    name: 'Adobe XD',
    type: 'Application',
    category: 'Design',
    version: '57.1',
    size: '1.8 GB',
    date: '2024-01-18',
    status: 'Active'
  },
  {
    id: '4',
    name: 'Parcel Bundler',
    type: 'Build Tool',
    category: 'Development',
    version: '2.10.0',
    size: '12 MB',
    date: '2024-01-25',
    status: 'Active'
  },
  {
    id: '5',
    name: 'Adobe Illustrator',
    type: 'Application',
    category: 'Design',
    version: '2024.1',
    size: '2.5 GB',
    date: '2024-01-12',
    status: 'Inactive'
  },
  {
    id: '6',
    name: 'TypeScript',
    type: 'Language',
    category: 'Development',
    version: '5.3.0',
    size: '8 MB',
    date: '2024-01-22',
    status: 'Active'
  }
];

export const tableColumns = [
  { name: 'Name', uid: 'name', sortable: true },
  { name: 'Type', uid: 'type', sortable: true },
  { name: 'Category', uid: 'category', sortable: true },
  { name: 'Version', uid: 'version', sortable: false },
  { name: 'Size', uid: 'size', sortable: true },
  { name: 'Date', uid: 'date', sortable: true },
  { name: 'Status', uid: 'status', sortable: true }
];

// Helper function to get status badge variant
export const getStatusVariant = (status) => {
  switch (status) {
    case 'Active':
      return 'positive';
    case 'Inactive':
      return 'negative';
    default:
      return 'neutral';
  }
};
