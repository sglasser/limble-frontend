import { IChartData } from '../interfaces/chart-data.interface';
import { IWorkerCost } from '../interfaces/worker-cost.interface';

export const workerCostToChartData = (data: IWorkerCost[]): IChartData[] => {
  return data.map((item: any) => {
    return {
      name: item.worker_username,
      value: item.total_cost,
    };
  });
};
