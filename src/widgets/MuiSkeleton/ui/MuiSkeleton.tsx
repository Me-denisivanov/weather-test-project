import { Stack, Skeleton } from '@mui/material';

export const MuiSkeleton = () => (
    <Stack spacing={0.8}>
        <Skeleton variant="rounded" width={260} height={180} animation="wave" />
        <Skeleton variant="rounded" width={260} height={36} animation="wave" />
    </Stack>
);
