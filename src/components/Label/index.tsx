import styles from './index.module.css'

type Props = {
  /** ラベル */
  label: string
  num?: number
}

/**
 * Label
 * @param props - props
 * @returns Label コンポーネント
 */
export default function Label(props: Props) {
  return (
    <div className={styles.label}>
      {props.label}
      {props.num ? `(${props.num})` : ''}
    </div>
  )
}
