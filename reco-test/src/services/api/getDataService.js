import { useMemo } from 'react';
import Endpoints from '../utils/endpoints';
import { Contextualizer } from '../contextualizer';
import { ProvidedServices } from '../providedServices';
import ApiBase from './axiosService';


class DataService extends ApiBase {
  constructor() {
    super(Endpoints.getProcess);
  }
}

export const DataServiceContext =
  Contextualizer.createContext(ProvidedServices.DataService);

export const useDataService = () =>
  Contextualizer.use(ProvidedServices.DataService);

export function JobService({ children }) {
  const jobService = useMemo(() => new DataService(), []);

  return (
    <DataServiceContext.Provider value={jobService}>
      {children}
    </DataServiceContext.Provider>
  );
}
