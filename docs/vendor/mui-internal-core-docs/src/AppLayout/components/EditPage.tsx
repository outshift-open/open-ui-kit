import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslate } from "../../i18n";

export interface EditPageProps {
  sourceLocation: string;
}

export function EditPage(props: EditPageProps) {
  const { sourceLocation } = props;
  const t = useTranslate();

  if (!sourceLocation) {
    // An empty div such that the footer layout stays unchanged.
    return <div />;
  }

  return (
    <Button
      component="a"
      size="small"
      variant="text"
      color="secondary"
      startIcon={<GitHubIcon sx={{ mr: 0.5 }} />}
      href={`${process.env.SOURCE_CODE_REPO}/edit/${process.env.SOURCE_GITHUB_BRANCH}${sourceLocation}`}
      target="_blank"
      rel="noopener nofollow"
    >
      {t("editPage")}
    </Button>
  );
}
