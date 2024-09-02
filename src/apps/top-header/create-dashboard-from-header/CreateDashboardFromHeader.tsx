import React, { SetStateAction } from "react";
import Createdashboard from "../../create-dashboard/Createdashboard";
import ModalField from "../../../common/component-lib/modal";
import { useTranslation } from "react-i18next";

interface ICreateDashboardFromHeader {
  handleCloseModal: (event: React.SyntheticEvent, reason: string) => void;
  showDashboardCreateModel: boolean;
  setShowDashboardCreateModel: (value: SetStateAction<boolean>) => void;
  handleSuccess: () => void;
}

const CreateDashboardFromHeader = (
  props: ICreateDashboardFromHeader
): JSX.Element => {
  const { t } = useTranslation();

  const {
    handleCloseModal,
    showDashboardCreateModel,
    setShowDashboardCreateModel,
    handleSuccess,
  } = props;
  return (
    <ModalField
      handleCloseModal={handleCloseModal}
      showModal={showDashboardCreateModel}
      modalWidth="lg"
      titleSummary={t("Create New Dashboard")}
      dialogContent={
        <Createdashboard
          onSuccess={handleSuccess}
          redirectAfterSuccess={false}
        />
      }
      handleCrossIcon={() => setShowDashboardCreateModel(false)}
    />
  );
};

export default CreateDashboardFromHeader;
