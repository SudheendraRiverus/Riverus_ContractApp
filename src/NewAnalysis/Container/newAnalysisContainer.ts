import { connect } from "react-redux";
import AppActionGenerator from "../../App/Actions/actionGen";
import { StoreTree } from "../../Utils/MainReducer/mainReducer";
import NewAnalysisActionGenerator from "../Actions/gen";
import NewAnalysis from "../Component/newAnalysis";
import { LocalNewAnalysisFilterStructure, NewAnalysisFilterStructure } from "../State/newAnalysisState";

export function mapStateToProps(appState: StoreTree, ownProps: any){
    return {
        newAnalysisLoader: appState.newAnalysis.newAnalysisLoader,
        newAnalysisFileIds: appState.newAnalysis.newAnalysisFileIds,
        newAnalysisData: appState.newAnalysis.newAnalysisData,
        newAnalysisDataLoader: appState.newAnalysis.newAnalysisDataLoader,
        newAnalysisInitialFileIds: appState.newAnalysis.newAnalysisInitialFileIds,
        newAnalysisFilterConfig: appState.newAnalysis.newAnalysisFilterConfig,
        newAnalysisFilterAggregate: appState.newAnalysis.newAnalysisFilterAggregate,
        appliedFilter: appState.newAnalysis.appliedFilter,
        clauseAggregate: appState.newAnalysis.clauseAggregate,
        clausePresentAggregateValues: appState.newAnalysis.clausePresentAggregateValues,
        clauseAbsentAggregateValues: appState.newAnalysis.clauseAbsentAggregateValues,
        newAnalysisLocalAppliedFilter: appState.newAnalysis.newAnalysisLocalAppliedFilter,
        clauseAggregateLoader: appState.newAnalysis.clauseAggregateLoader,
        clausePresentAggregateLoader: appState.newAnalysis.clausePresentAggregateLoader,
        clauseAbsentAggregateLoader: appState.newAnalysis.clauseAbsentAggregateLoader,
        newAnalysisFilteredCount: appState.newAnalysis.newAnalysisFilteredCount,
        tagsAggregate: appState.newAnalysis.tagsAggregate,
        natureTagsAggregateValues: appState.newAnalysis.natureTagsAggregateValues,
        natureTagsAggregateLoader: appState.newAnalysis.natureTagsAggregateLoader,
        typeTagsAggregateValues: appState.newAnalysis.typeTagsAggregateValues,
        typeTagsAggregateLoader: appState.newAnalysis.typeTagsAggregateLoader,
        groupTagsAggregateValues: appState.newAnalysis.groupTagsAggregateValues,
        groupsTagsAggregateLoader: appState.newAnalysis.groupsTagsAggregateLoader,
        partyAggregate: appState.newAnalysis.partyAggregate,
        partyAggregateValues: appState.newAnalysis.partyAggregateValues,
        partyAggregateLoader: appState.newAnalysis.partyAggregateLoader,
        renewalAggregate: appState.newAnalysis.renewalAggregate,
        confidentialityAggregate: appState.newAnalysis.confidentialityAggregate,
        confidentialityNatureAggregateValues: appState.newAnalysis.confidentialityNatureAggregateValues,
        confidentialityNatureAggregateLoader: appState.newAnalysis.confidentialityNatureAggregateLoader,
        changeOfControlAggregate: appState.newAnalysis.changeOfControlAggregate,
        changeOfControlIntersectionAggregateValues: appState.newAnalysis.changeOfControlIntersectionAggregateValues,
        changeOfControlIntersectionLoader: appState.newAnalysis.changeOfControlIntersectionLoader,
        terminationAggregate: appState.newAnalysis.terminationAggregate,
        terminationAtConvinienceAggregateValues: appState.newAnalysis.terminationAtConvinienceAggregateValues,
        terminationAtConvinienceAggregateLoader: appState.newAnalysis.terminationAtConvinienceAggregateLoader,
        terminationEventAggregateValues: appState.newAnalysis.terminationEventAggregateValues,
        terminationEventAggregateLoader: appState.newAnalysis.terminationEventAggregateLoader,
        eventOfDefaultAggregate: appState.newAnalysis.eventOfDefaultAggregate,
        eventOfDefaultEventAggregateValues: appState.newAnalysis.eventOfDefaultEventAggregateValues,
        eventOfDefaultEventAggregateLoader: appState.newAnalysis.eventOfDefaultEventAggregateLoader,
        forceMajeureAggregate: appState.newAnalysis.forceMajeureAggregate,
        forceMajuereEventAggregateValues: appState.newAnalysis.forceMajuereEventAggregateValues,
        forceMajuereEventAggregateLoader: appState.newAnalysis.forceMajuereEventAggregateLoader,
        governingLawAggregate: appState.newAnalysis.governingLawAggregate,
        governingLawJurisdictionAggregateValues: appState.newAnalysis.governingLawJurisdictionAggregateValues,
        governingLawJurisdictionAggregateLoader: appState.newAnalysis.governingLawJurisdictionAggregateLoader,
        disputeResolutionAggregate: appState.newAnalysis.disputeResolutionAggregate,
        disputeResolutionVenueAggregateValues: appState.newAnalysis.disputeResolutionVenueAggregateValues,
        disputeResolutionVenueAggregateLoader: appState.newAnalysis.disputeResolutionVenueAggregateLoader,
        disputeResolutionOthersAggregateValues: appState.newAnalysis.disputeResolutionOthersAggregateValues,
        disputeResolutionOthersAggregateLoader: appState.newAnalysis.disputeResolutionOthersAggregateLoader,
        disputeResolutionArbitrationAggregateValues: appState.newAnalysis.disputeResolutionArbitrationAggregateValues,
        disputeResolutionArbitrationAggregateLoader: appState.newAnalysis.disputeResolutionArbitrationAggregateLoader,
        disputeResolutionActStatuteAggregateValues: appState.newAnalysis.disputeResolutionActStatuteAggregateValues,
        disputeResolutionActStatuteAggregateLoader: appState.newAnalysis.disputeResolutionActStatuteAggregateLoader,
        disputeResolutionPanelAggregateValues: appState.newAnalysis.disputeResolutionPanelAggregateValues,
        disputeResolutionPanelAggregateLoader: appState.newAnalysis.disputeResolutionPanelAggregateLoader,
        disputeResolutionNegotiationAggregateValues: appState.newAnalysis.disputeResolutionNegotiationAggregateValues,
        disputeResolutionNegotiationAggregateLoader: appState.newAnalysis.disputeResolutionNegotiationAggregateLoader,
        disputeResolutionMediationAggregateValues: appState.newAnalysis.disputeResolutionMediationAggregateValues,
        disputeResolutionMediationAggregateLoader: appState.newAnalysis.disputeResolutionMediationAggregateLoader,
        disputeResolutionConciliationAggregateValues: appState.newAnalysis.disputeResolutionConciliationAggregateValues,
        disputeResolutionConciliationAggregateLoader: appState.newAnalysis.disputeResolutionConciliationAggregateLoader,
        consentAggregate: appState.newAnalysis.consentAggregate,
        consentTypeAggregateValues: appState.newAnalysis.consentTypeAggregateValues,
        consentTypeAggregateLoader: appState.newAnalysis.consentTypeAggregateLoader,
        consentAuthorityAggregateValues: appState.newAnalysis.consentAuthorityAggregateValues,
        consentAuthorityAggregateLoader: appState.newAnalysis.consentAuthorityAggregateLoader,
        newAnalysisSortedBy: appState.newAnalysis.newAnalysisSortedBy,
        newAnalysisSortOrder: appState.newAnalysis.newAnalysisSortOrder,
        newAnalysisTableConfig: appState.newAnalysis.newAnalysisTableConfig,
        newAnalysisTableConfigLoader: appState.newAnalysis.newAnalysisTableConfigLoader,
        termAggregate: appState.newAnalysis.termAggregate,
        startDateAggregateValues: appState.newAnalysis.startDateAggregateValues,
        startDateAggregateLoader: appState.newAnalysis.startDateAggregateLoader,
        startDateMinValue: appState.newAnalysis.startDateMinValue,
        startDateMaxValue: appState.newAnalysis.startDateMaxValue,
        startDateLeftThumb: appState.newAnalysis.startDateLeftThumb,
        startDateRightThumb: appState.newAnalysis.startDateRightThumb,
        endDateAggregateValues: appState.newAnalysis.endDateAggregateValues,
        endDateAggregateLoader: appState.newAnalysis.endDateAggregateLoader,
        endDateMinValue: appState.newAnalysis.endDateMinValue,
        endDateMaxValue: appState.newAnalysis.endDateMaxValue,
        endDateLeftThumb: appState.newAnalysis.endDateLeftThumb,
        endDateRightThumb: appState.newAnalysis.endDateRightThumb,
        paymentAggregate: appState.newAnalysis.paymentAggregate,
        paymentCurrencyAggregateValues: appState.newAnalysis.paymentCurrencyAggregateValues,
        paymentAmountAggregateValues: appState.newAnalysis.paymentAmountAggregateValues,
        paymentAmountAggregateLoader: appState.newAnalysis.paymentAmountAggregateLoader,
        paymentAmountMinValue: appState.newAnalysis.paymentAmountMinValue,
        paymentAmountMaxValue: appState.newAnalysis.paymentAmountMaxValue,
        paymentAmountLeftThumb: appState.newAnalysis.paymentAmountLeftThumb,
        paymentAmountRightThumb: appState.newAnalysis.paymentAmountRightThumb,
        paymentAmountCurrency: appState.newAnalysis.paymentAmountCurrency,
        paymentCurrencyAggregateLoader: appState.newAnalysis.paymentCurrencyAggregateLoader,
        indemnityAggregate: appState.newAnalysis.indemnityAggregate,
        indemnityCurrencyAggregateValues: appState.newAnalysis.indemnityCurrencyAggregateValues,
        indemnityAmountAggregateValues: appState.newAnalysis.indemnityAmountAggregateValues,
        indemnityAmountAggregateLoader: appState.newAnalysis.indemnityAmountAggregateLoader,
        indemnityAmountMinValue: appState.newAnalysis.indemnityAmountMinValue,
        indemnityAmountMaxValue: appState.newAnalysis.indemnityAmountMaxValue,
        indemnityAmountLeftThumb: appState.newAnalysis.indemnityAmountLeftThumb,
        indemnityAmountRightThumb: appState.newAnalysis.indemnityAmountRightThumb,
        indemnityAmountCurrency: appState.newAnalysis.indemnityAmountCurrency,
        indemnityCurrencyAggregateLoader: appState.newAnalysis.indemnityCurrencyAggregateLoader,
        limitationOfLiabilityAggregate: appState.newAnalysis.limitationOfLiabilityAggregate,
        limitationOfLiabilityCurrencyAggregateValues: appState.newAnalysis.limitationOfLiabilityCurrencyAggregateValues,
        limitationOfLiabilityAmountAggregateValues: appState.newAnalysis.limitationOfLiabilityAmountAggregateValues,
        limitationOfLiabilityAmountAggregateLoader: appState.newAnalysis.limitationOfLiabilityAmountAggregateLoader,
        limitationOfLiabilityAmountMinValue: appState.newAnalysis.limitationOfLiabilityAmountMinValue,
        limitationOfLiabilityAmountMaxValue: appState.newAnalysis.limitationOfLiabilityAmountMaxValue,
        limitationOfLiabilityAmountLeftThumb: appState.newAnalysis.limitationOfLiabilityAmountLeftThumb,
        limitationOfLiabilityAmountRightThumb: appState.newAnalysis.limitationOfLiabilityAmountRightThumb,
        limitationOfLiabilityAmountCurrency: appState.newAnalysis.limitationOfLiabilityAmountCurrency,
        limitationOfLiabilityCurrencyAggregateLoader: appState.newAnalysis.limitationOfLiabilityCurrencyAggregateLoader,
        indemnityPayerAggregateValues: appState.newAnalysis.indemnityPayerAggregateValues,
        indemnityPayerAggregateLoader: appState.newAnalysis.indemnityPayerAggregateLoader,
        indemnityPayeeAggregateValues: appState.newAnalysis.indemnityPayeeAggregateValues,
        indemnityPayeeAggregateLoader: appState.newAnalysis.indemnityPayeeAggregateLoader,
        indemnityTriggeringEventAggregateValues: appState.newAnalysis.indemnityTriggeringEventAggregateValues,
        indemnityTriggeringEventAggregateLoader: appState.newAnalysis.indemnityTriggeringEventAggregateLoader,
        indemnityExtentOfCostsAggregateValues: appState.newAnalysis.indemnityExtentOfCostsAggregateValues,
        indemnityExtentOfCostsAggregateLoader: appState.newAnalysis.indemnityExtentOfCostsAggregateLoader,
        nonCompeteAggregate: appState.newAnalysis.nonCompeteAggregate,
        nonCompeteTerritoryAggregateValues: appState.newAnalysis.nonCompeteTerritoryAggregateValues,
        nonCompeteTerritoryAggregateLoader: appState.newAnalysis.nonCompeteTerritoryAggregateLoader,
        sublettingAssignmentAggregate: appState.newAnalysis.sublettingAssignmentAggregate,
        sublettingAssignmentConsentAggregateValues: appState.newAnalysis.sublettingAssignmentConsentAggregateValues,
        sublettingAssignmentConsentAggregateLoader: appState.newAnalysis.sublettingAssignmentConsentAggregateLoader,
        sublettingAssignmentNoticeAggregateValues: appState.newAnalysis.sublettingAssignmentNoticeAggregateValues,
        sublettingAssignmentNoticeAggregateLoader: appState.newAnalysis.sublettingAssignmentNoticeAggregateLoader
    }
}
export function mapDispatchToProps(dispatch: any, ownProps: any){
    return{
        pageWatcher: (page: string) => dispatch(AppActionGenerator.pageWatcher(page)),
        getNewAnalysisData: (newAnalysisFileIds: number[], sort: string, order: string) => dispatch(NewAnalysisActionGenerator.getNewAnalysisData(newAnalysisFileIds, sort, order)),
        getNewAnalysisFileId: () => dispatch(NewAnalysisActionGenerator.getNewAnalysisFileId()),
        getNewAnalysisFilterConfig: () => dispatch(NewAnalysisActionGenerator.getNewAnalysisFilterConfig()),
        getNewAnalysisFilterAggregate: ( value: string, level: number, page: string, sort: string, order: string, filter: NewAnalysisFilterStructure[], segment: string, isFilterForwarded: boolean ) => dispatch(NewAnalysisActionGenerator.getNewAnalysisFilterAggregate(value, level, page, sort, order, filter, segment, isFilterForwarded)),
        applyNewAnalysisFilter: ( sort: string, filter: NewAnalysisFilterStructure[], newAnalysisSortedBy: string, newAnalysisSortOrder: string) => dispatch(NewAnalysisActionGenerator.applyNewAnalysisFilter(sort, filter, newAnalysisSortedBy, newAnalysisSortOrder)),
        saveNewAnalysisLocalAppliedFilter: (newAnalysisLocalAppliedFilter: LocalNewAnalysisFilterStructure[]) => dispatch(NewAnalysisActionGenerator.saveNewAnalysisLocalAppliedFilter(newAnalysisLocalAppliedFilter)),
        getNewAnalysisFilterCount: ( filter: NewAnalysisFilterStructure[]) => dispatch(NewAnalysisActionGenerator.getNewAnalysisFilterCount(filter)),
        saveNewAnalysisSort: (newAnalysisSortedBy: string, newAnalysisSortOrder: string) => dispatch(NewAnalysisActionGenerator.saveNewAnalysisSort(newAnalysisSortedBy, newAnalysisSortOrder)),
        saveNewAnalysisConfiguration: (title: string, description: string, type: string, lastResultCount: number, filter: NewAnalysisFilterStructure[]) => dispatch(NewAnalysisActionGenerator.saveNewAnalysisConfiguration(title, description, type, lastResultCount, filter)),
        saveNewAnalysisFilter: (appliedFilter: NewAnalysisFilterStructure[]) => dispatch(NewAnalysisActionGenerator.saveNewAnalysisFilter(appliedFilter)),
        updateConfigurationCount: (count: number, ssid: number ) => dispatch(NewAnalysisActionGenerator.updateConfigurationCount(count, ssid)),
        getNewAnalysisTableConfig: () => dispatch(NewAnalysisActionGenerator.getNewAnalysisTableConfig()),
        getNewAnalysisInitialFileId: () => dispatch(NewAnalysisActionGenerator.getNewAnalysisInitialFileId()),
        saveNewAnalysisCurrency: (currencyName: string, typeName: string ) => dispatch(NewAnalysisActionGenerator.saveNewAnalysisCurrency(currencyName, typeName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAnalysis);