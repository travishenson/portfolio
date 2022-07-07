import dayjs from 'dayjs';

export const parseProjectDates = (
  startDate: Record<string, unknown>,
  finishDate: Record<string, unknown> | null
): {start: string; finish: string} => {
  const rawStartDate = String(startDate);
  const rawFinishDate = String(finishDate);

  return {
    start: dayjs(rawStartDate).format('MMM YYYY'),
    finish: finishDate ? dayjs(rawFinishDate).format('MMM YYYY') : 'Present',
  };
};
