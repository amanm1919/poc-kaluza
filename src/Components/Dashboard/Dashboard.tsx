import { Box } from "@mui/material";
import AccountSummary from "../SummaryCard/AccountSummary";

function Dashboard() {
    return (
        <>
            <div>
                <Box sx={{ p: 3 }}>
                    <AccountSummary />
                </Box>
            </div>
        </>
    )
}

export default Dashboard;