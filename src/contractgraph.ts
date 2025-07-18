import {
  CampaignCreated as CampaignCreatedEvent,
  CampaignEnded as CampaignEndedEvent,
  PrizeClaimed as PrizeClaimedEvent
} from "../generated/contractgraph/contractgraph"
import {
  CampaignCreated,
  CampaignEnded,
  PrizeClaimed
} from "../generated/schema"

export function handleCampaignCreated(event: CampaignCreatedEvent): void {
  let entity = new CampaignCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.campaignId = event.params.campaignId
  entity.company = event.params.company
  entity.totalFunds = event.params.totalFunds
  entity.prizePerWinner = event.params.prizePerWinner
  entity.endTime = event.params.endTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCampaignEnded(event: CampaignEndedEvent): void {
  let entity = new CampaignEnded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.campaignId = event.params.campaignId
  entity.platformFee = event.params.platformFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePrizeClaimed(event: PrizeClaimedEvent): void {
  let entity = new PrizeClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.campaignId = event.params.campaignId
  entity.winner = event.params.winner
  entity.qrHash = event.params.qrHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
