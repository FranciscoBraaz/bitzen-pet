import Skeleton from "react-loading-skeleton"

import "./index.scss"

export function SkeletonDetails() {
  return (
    <div className="skeleton-details">
      <div className="skeleton-details__img">
        <Skeleton width="100%" height="100%" />
      </div>
      <div className="skeleton-details__info">
        <div className="skeleton-details__info__top">
          <div>
            <Skeleton width={100} height={30} />
            <Skeleton width={100} height={20} style={{ marginTop: 8 }} />
          </div>
          <div>
            <Skeleton width={100} height={30} />
            <Skeleton width={100} height={20} style={{ marginTop: 8 }} />
          </div>
          <div>
            <Skeleton width={100} height={30} />
            <Skeleton width={100} height={20} style={{ marginTop: 8 }} />
          </div>
        </div>
        <div className="skeleton-details__info__bottom">
          <Skeleton width={100} height={30} />
          <Skeleton width="80%" height={60} style={{ marginTop: 8 }} />
        </div>
      </div>
    </div>
  )
}
