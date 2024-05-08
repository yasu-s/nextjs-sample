import styles from './index.module.css'

type Props = {
  /** ラベル */
  label: string
}

/**
 * Label
 * @param props - props
 * @returns Label コンポーネント
 */
export default function Label(props: Props) {
  return <div className={styles.label}>{props.label}</div>
}
