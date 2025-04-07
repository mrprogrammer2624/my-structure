import { Icons } from "../../../constants"
import { CHInput } from "../CHInput"
import styles from "./CHTagInput.module.css"

export const CHTagInput = ({ tagList, onChange, onAdd, onRemove, ...rest }) => {
  return (
    <>
      <CHInput
        onChange={onChange}
        suffix={
          <button
            title="Add"
            className="bg-transparent border-0 d-flex cursor-pointer"
            onClick={onAdd}
          >
            {Icons.AddCircle}
          </button>
        }
        {...rest}
      />
      {tagList && tagList.length > 0 && (
        <ul className={styles.tagsWrap}>
          {tagList.map((name, idx) => {
            return (
              <li key={idx} className={styles.tagItem}>
                {name}
                <button
                  className="bg-transparent border-0 d-flex cursor-pointer clr-gray-dark"
                  onClick={() => onRemove(name)}
                  title={"Remove"}
                >
                  {Icons.CloseCircleFilled}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
