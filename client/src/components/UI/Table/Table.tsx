import { useTranslation } from 'react-i18next';
import classes from './Table.module.css';

interface Props {
  children: React.ReactNode;
  headers: string[];
  innerRef?: any;
}

export const Table = (props: Props): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={classes.TableContainer} ref={props.innerRef}>
      <table className={classes.Table}>
        <thead className={classes.TableHead}>
          <tr>
            {props.headers.map(
              (header: string, index: number): JSX.Element => (
                <th key={index}>{t(header)}</th>
              )
            )}
          </tr>
        </thead>
        <tbody className={classes.TableBody}>{props.children}</tbody>
      </table>
    </div>
  );
};
