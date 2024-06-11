import Skeleton from "react-loading-skeleton"

// Styles
import "./index.scss"

function SkeletonItem() {
  return (
    <div className="skeleton-list__item">
      <div>
        <span>Pet</span>
        <Skeleton height={88} width={88} />
      </div>
      <div>
        <span>Nome</span>
        <Skeleton height={20} width={100} />
      </div>
      <div>
        <span>Idade</span>
        <Skeleton height={20} width={100} />
      </div>
      <div>
        <span>Cor</span>
        <Skeleton height={20} width={100} />
      </div>
      <div>
        <span />
        <Skeleton height={20} width={100} />
      </div>
    </div>
  )
}

export function SkeletonList() {
  return (
    <div className="skeleton-list">
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </div>
  )
}
