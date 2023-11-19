import Dashboardstats from '../components/DashboardStats'
import DashboardCharts from '../components/DashboardCharts'
import LatestStudents from '../components/LatestStudents'
function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <Dashboardstats />
            <DashboardCharts />
            <LatestStudents />
        </div>
    )
}

export default Dashboard
