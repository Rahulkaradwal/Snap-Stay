import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';
import ResponsiveHeader from '../ui/ResponsiveHeader';
import Row from '../ui/Row';

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <ResponsiveHeader as="h1">Dashboard</ResponsiveHeader>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
