import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  CampaignCreated,
  CampaignEnded,
  PrizeClaimed
} from "../generated/contractgraph/contractgraph"

export function createCampaignCreatedEvent(
  campaignId: BigInt,
  company: Address,
  totalFunds: BigInt,
  prizePerWinner: BigInt,
  endTime: BigInt
): CampaignCreated {
  let campaignCreatedEvent = changetype<CampaignCreated>(newMockEvent())

  campaignCreatedEvent.parameters = new Array()

  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "campaignId",
      ethereum.Value.fromUnsignedBigInt(campaignId)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("company", ethereum.Value.fromAddress(company))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "totalFunds",
      ethereum.Value.fromUnsignedBigInt(totalFunds)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "prizePerWinner",
      ethereum.Value.fromUnsignedBigInt(prizePerWinner)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )

  return campaignCreatedEvent
}

export function createCampaignEndedEvent(
  campaignId: BigInt,
  platformFee: BigInt
): CampaignEnded {
  let campaignEndedEvent = changetype<CampaignEnded>(newMockEvent())

  campaignEndedEvent.parameters = new Array()

  campaignEndedEvent.parameters.push(
    new ethereum.EventParam(
      "campaignId",
      ethereum.Value.fromUnsignedBigInt(campaignId)
    )
  )
  campaignEndedEvent.parameters.push(
    new ethereum.EventParam(
      "platformFee",
      ethereum.Value.fromUnsignedBigInt(platformFee)
    )
  )

  return campaignEndedEvent
}

export function createPrizeClaimedEvent(
  campaignId: BigInt,
  winner: Address,
  qrHash: Bytes
): PrizeClaimed {
  let prizeClaimedEvent = changetype<PrizeClaimed>(newMockEvent())

  prizeClaimedEvent.parameters = new Array()

  prizeClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "campaignId",
      ethereum.Value.fromUnsignedBigInt(campaignId)
    )
  )
  prizeClaimedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  prizeClaimedEvent.parameters.push(
    new ethereum.EventParam("qrHash", ethereum.Value.fromFixedBytes(qrHash))
  )

  return prizeClaimedEvent
}
