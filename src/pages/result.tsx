import { useRouter } from "next/router";
import { Button, PathList } from "components";
import { useResult } from "hooks";
import { Card } from "styles/shared";
import { Content, ErrorContainer, ErrorMessage } from "styles/result";
import { IconSpinner } from "styles/icons";

export default function ResultPage() {
  const { loading, result, error } = useResult();
  const router = useRouter();

  return (
    <Card>
      {error && (
        <Content visible={true}>
          <ErrorContainer>
            <ErrorMessage>{error}</ErrorMessage>
            <Button
              onClick={() => {
                router.push("/");
              }}
            >
              Back
            </Button>
          </ErrorContainer>
        </Content>
      )}

      {result && !error && (
        <Content visible={true}>
          <PathList result={result} onBack={() => router.push("/")} />
        </Content>
      )}

      <Content visible={loading} centralize={true}>
        <IconSpinner />
      </Content>
    </Card>
  );
}
