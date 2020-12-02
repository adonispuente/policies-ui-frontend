import { UnknownIcon } from '@patternfly/react-icons';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'react-string-format';

import { EmptyStateSection } from '../../components/Policy/EmptyState/Section';
import { Messages } from '../../properties/Messages';
import { linkTo } from '../../Routes';

interface ListPageEmptyStateProps {
    policyId: string;
}

export const PolicyDetailEmptyState: React.FunctionComponent<ListPageEmptyStateProps> = (props) => {

    const history = useHistory();

    const goBack = React.useCallback(() => {
        history.push(linkTo.listPage());
    }, [ history ]);

    return <EmptyStateSection
        icon={ UnknownIcon }
        title={ Messages.pages.policyDetail.emptyState.title }
        content={ format(Messages.pages.policyDetail.emptyState.text, props.policyId) }
        actionLabel={ Messages.pages.policyDetail.emptyState.backText }
        action={ goBack }
    />;
};
