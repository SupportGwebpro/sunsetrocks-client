import { type ReactNode } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Button, Flex } from "@radix-ui/themes";

interface ConfirmModalProps {
    title: string;
    description: ReactNode;
    actionLabel: string;
    triggerLabel: string;
    onConfirm: () => void;
}

export default function ConfirmModal({
    title,
    description,
    actionLabel,
    triggerLabel,
    onConfirm,
}: ConfirmModalProps) {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button color="red">{triggerLabel}</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content style={{ maxWidth: "450px" }}>
                <AlertDialog.Title>{title}</AlertDialog.Title>
                <AlertDialog.Description>
                    {description}
                </AlertDialog.Description>
                <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                        <Button variant="solid" color="red" onClick={onConfirm}>
                            {actionLabel}
                        </Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}