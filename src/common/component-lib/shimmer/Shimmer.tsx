import styles from './shimmer.module.css';

interface IShimmer {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  className?: string;
  dataTestId?: string;
}

const Shimmer = ({ width, height, style, className, dataTestId }: IShimmer): JSX.Element => {
  return (
    <div
      data-testid={dataTestId || 'shimmer'}
      className={`${styles.shimmer_container} ${className}`}
      style={{ height, width, ...style }}
    />
  );
};

Shimmer.defaultProps = {
  height: '',
  width: '',
  style: {},
  className: '',
  dataTestId: ''
};

export default Shimmer;
