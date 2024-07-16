/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { FC, createContext, useContext, useEffect, useState } from "react";
import { WithChildren } from "../../helpers";

export interface PageLink {
  title: string;
  path: string;
  isActive: boolean;
  isSeparator?: boolean;
}

export interface PageDataContextModel {
  pageTitle?: string;
  setPageTitle: (_title: string) => void;
  pageDescription?: string;
  setPageDescription: (_description: string) => void;
  pageBreadcrumbs?: Array<PageLink>;
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => void;
}

export const PageDataContext = createContext<PageDataContextModel>({
  setPageTitle: (_title: string) => {},
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => {},
  setPageDescription: (_description: string) => {},
});

export const PageDataProvider: FC<WithChildren> = ({ children }) => {
  const [pageTitle, setPageTitle] = useState<string>("");
  const [pageDescription, setPageDescription] = useState<string>("");
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<Array<PageLink>>([]);
  const value: PageDataContextModel = {
    pageTitle,
    setPageTitle,
    pageDescription,
    setPageDescription,
    pageBreadcrumbs,
    setPageBreadcrumbs,
  };
  return (
    <PageDataContext.Provider value={value}>
      {children}
    </PageDataContext.Provider>
  );
};

export function usePageData() {
  return useContext(PageDataContext);
}

export type Props = {
  description?: string;
  breadcrumbs?: Array<PageLink>;
};

export const PageTitle: FC<Props & WithChildren> = ({
  children,
  description,
  breadcrumbs,
}) => {
  const { setPageTitle, setPageDescription, setPageBreadcrumbs } =
    usePageData();
  useEffect(() => {
    if (children) {
      setPageTitle(children.toString());
    }
    return () => {
      setPageTitle("");
    };
  }, [children]);

  useEffect(() => {
    if (description) {
      setPageDescription(description);
    }
    return () => {
      setPageDescription("");
    };
  }, [description]);

  useEffect(() => {
    if (breadcrumbs) {
      setPageBreadcrumbs(breadcrumbs);
    }
    return () => {
      setPageBreadcrumbs([]);
    };
  }, [breadcrumbs]);

  return <></>;
};

export const PageDescription: FC<WithChildren> = ({ children }) => {
  const { setPageDescription } = usePageData();
  useEffect(() => {
    if (children) {
      setPageDescription(children.toString());
    }
    return () => {
      setPageDescription("");
    };
  }, [children]);
  return <></>;
};

export default { PageDescription, PageTitle, PageDataProvider, usePageData };
