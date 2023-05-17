import { useRouter } from "next/router";
import { Row, Col } from "antd";
import { STATUS_OPTIONS, SHORT_TITLE_OPTIONS } from "@/constants";
import Select from "../Select";
import { useMemo } from "react";

const FilterBar = () => {
  const router = useRouter();
  const { status, short_title: shortTitle } = router.query;

  const statusValue = useMemo(() => {
    if (typeof status === "string") {
      return status.split(",");
    }

    return status;
  }, [status]);

  const shortTitleValue = useMemo(() => {
    if (typeof shortTitle === "string") {
      return shortTitle.split(",");
    }

    return shortTitle;
  }, [shortTitle]);

  const handleChangeFilter =
    (key: string) => (selectedOptions: string | string[]) => {
      let queryValue;

      if (typeof selectedOptions === "string") {
        queryValue = selectedOptions;
      } else if (selectedOptions.length) {
        queryValue = selectedOptions.join(",");
      } else {
        queryValue = [];
      }

      router.replace({
        query: { ...router.query, [key]: queryValue },
      });
    };

  return (
    <section>
      <Row gutter={64}>
        <Col xs={24} sm={12} md={8}>
          <Select
            allowClear
            label="Filter by status"
            placeholder="Select status"
            mode="multiple"
            style={{ width: "100%" }}
            options={STATUS_OPTIONS}
            value={statusValue}
            onChange={handleChangeFilter("status")}
          />
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Select
            allowClear
            label="Filter by short title"
            placeholder="Select short title"
            mode="multiple"
            style={{ width: "100%" }}
            options={SHORT_TITLE_OPTIONS}
            value={shortTitleValue}
            onChange={handleChangeFilter("short_title")}
          />
        </Col>
      </Row>
    </section>
  );
};

export default FilterBar;
