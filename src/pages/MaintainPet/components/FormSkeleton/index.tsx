import Skeleton from "react-loading-skeleton"

// Styles
import "./index.scss"

export function FormSkeleton() {
  return (
    <div className="form-skeleton">
      <div className="form-skeleton__image">
        <Skeleton width="100%" height={280} />
      </div>
      <div className="form-skeleton__form">
        <Skeleton width="80%" height={49} />
        <Skeleton width="80%" height={49} style={{ marginTop: 24 }} />
        <Skeleton width="80%" height={49} style={{ marginTop: 24 }} />
        <Skeleton width="80%" height={88} style={{ marginTop: 24 }} />
      </div>
    </div>
  )
}
