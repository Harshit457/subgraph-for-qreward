import { CampaignCreated  }  from "../generated/contractgraph/contractgraph";
import { PrizeClaimed } from "../generated/contractgraph/contractgraph";
import { CampaignCreated as CampaignCreatedEntity } from "../generated/schema";
import {PrizeClaimed as PrizeClaimedEntity} from "../generated/schema"
export function handleCampaignCreated(event: CampaignCreated): void{
  const entity = new CampaignCreatedEntity(event.transaction.hash);
  entity.campaignId = event.params.campaignId;
  entity.company = event.params.company;
  entity.totalFunds = event.params.totalFunds;
  entity.save();
}
export function handlePrizeClaimed(event: PrizeClaimed): void {
  const entity = new PrizeClaimedEntity(event.transaction.hash);
  entity.campaignId = event.params.campaignId;
  entity.winner = event.params.winner;
  entity.save();
}