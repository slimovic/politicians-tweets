import { push } from 'connected-react-router';
import { createStandardAction } from 'typesafe-actions';

export const goToDefaultPolitician = createStandardAction(
    '@@router/GO_TO_DEFAULT_POLITICIAN'
)();
export const goToDashboard = () => push('/dashboard');
export const goToPoliticianDashboard = (politicianId: string) =>
    push(`/dashboard?politician=${politicianId}`);
