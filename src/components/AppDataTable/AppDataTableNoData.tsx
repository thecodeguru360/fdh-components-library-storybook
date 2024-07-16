export interface AppDataTableNoDataProps {
  cols: any;
  message: any;
}

export const AppDataTableNoData: React.FC<AppDataTableNoDataProps> = ({
  cols,
  message,
}) => {
  return (
    <div className="w-100 p-4">
      <div className="d-flex justify-content-between">
        {cols?.map((values: any, i: number) => (
          <div key={i}>
            <strong>{values?.name}</strong>
          </div>
        ))}
      </div>
      <hr />
      <p>
        <i>{message}</i>
      </p>
    </div>
  );
};

export default AppDataTableNoData;
